package com.beingjavaguys.controller;

import com.beingjavaguys.model.Brand;
import com.beingjavaguys.model.Employee;
import com.beingjavaguys.model.PMobile;
import com.beingjavaguys.model.Status;
import com.beingjavaguys.services.DataServices;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.*;

@Controller
@RequestMapping("/mobile")
public class RestController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(RestController.class);

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    Status addEmployee(@RequestBody Employee employee) {
        try {
            dataServices.addEntity(employee);
            return new Status(1, "Employee added Successfully !");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    Employee getEmployee(@PathVariable("id") long id) {
        Employee employee = null;
        try {
            employee = dataServices.getEntityById(id);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return employee;
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public
    @ResponseBody
    List<Employee> getEmployee() {

        List<Employee> employeeList = null;
        try {
            employeeList = dataServices.getEntityList();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return employeeList;
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    Status deleteEmployee(@PathVariable("id") long id) {

        try {
            dataServices.deleteEntity(id);
            return new Status(1, "Employee deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }


    @RequestMapping(value = "/allmobiles", method = RequestMethod.GET)
    public
    @ResponseBody
    List<PMobile> getAllMobiles() {

        List<PMobile> pMobileList = null;
        try {
            pMobileList = dataServices.getAllMobileList();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return pMobileList;
    }

    @RequestMapping(value = "/mobilebrands", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMobilesBrands() {
        String result = "";
        List<String> brandList = new ArrayList<String>();
        SortedSet<String> finalBrandlist = null;
        try {
            List<PMobile> mobileBrandList = dataServices.getAllMobileBrandList();
            for (PMobile product : mobileBrandList) {
                if (product.getBrand() != null && !product.getBrand().equalsIgnoreCase("")) {
                    brandList.add(product.getBrand());
                }
            }
            if (brandList.size() > 0) {
                Collections.sort(brandList, new Comparator<String>() {
                    @Override
                    public int compare(final String object1, final String object2) {
                        return object1.compareTo(object2);
                    }
                });
            }

            finalBrandlist = new TreeSet<String>(brandList);

            List<Brand> brnBrand = new ArrayList<Brand>();
            for (String brand1 : finalBrandlist) {
                Brand brand11 = new Brand();
                brand11.setBrand(brand1);
                brnBrand.add(brand11);

            }

            Gson gson = new Gson();
            result = gson.toJson(brnBrand);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    @RequestMapping(value = "mobilebrands/{brands}/{color}/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String mobileBrands(@PathVariable("brands") String brandNames, @PathVariable("color") String color,
                               @PathVariable("price") String price) throws Exception {

        System.out.println("mobileBrands for brandNames- " + brandNames.toString() + " - color - " + color + " - price - " + price);
        String result = "";

        JSONArray obj = new JSONArray(brandNames);
        JSONArray obj1 = new JSONArray(color);
        JSONArray obj2 = new JSONArray(price);

        List<PMobile> brnBrand = dataServices.getQueryResult(obj, obj1, obj2);


        Gson gson = new Gson();
        result = gson.toJson(brnBrand);

        return result;
    }

    @RequestMapping(value = "compare/{key}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String compareProductPrice(@PathVariable("key") String key) throws Exception {

        System.out.println("compareProductPrice for - " + key);
        String result = "";
        List<PMobile> getOMGPrice = null;
        try {
            getOMGPrice = dataServices.compareProductPrice(key.replaceAll("[^a-zA-Z0-9 ]", ""));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();
        result = gson.toJson(getOMGPrice);

        return result;
    }


}
