package com.beingjavaguys.controller;

import com.beingjavaguys.model.Brand;
import com.beingjavaguys.services.DataServices;
import com.beingjavaguys.vo.Product;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileNotFoundException;
import java.util.*;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 10/1/14
 * Time: 1:34 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/product")
public class ProductController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(WatchController.class);

    @RequestMapping(value = "/brands/{productType}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllTVsBrands(@PathVariable("productType") String productType) {
        String result = "";
        List<String> brandList = new ArrayList<String>();
        System.out.println("productType for brandNames- " + productType);

        SortedSet<String> finalBrandlist = null;
        try {
            List<Product> mobileBrandList = dataServices.getAllProductBrandList(productType);
            for (Product product : mobileBrandList) {
                if(product.getBrand()!=null){
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


    @RequestMapping(value = "/allProducts/{productType}", method = RequestMethod.GET)
    public
    @ResponseBody
    List<Product> getAllMenTVs(@PathVariable("productType") String productType) {

        List<Product> productList = null;
        try {
            productList = dataServices.getAllProductList(productType);

        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("men tshirt ########################################### - " + productList.size());
        return productList.subList(0, 500);
    }

    @RequestMapping(value = "filterProducts/{brands}/{color}/{price}/{productType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String mobileBrands(@PathVariable("brands") String brandNames, @PathVariable("color") String color,
                               @PathVariable("price") String price, @PathVariable("productType") String productType) throws Exception {

        System.out.println("mobileBrands for brandNames- " + brandNames.toString() + " - color - " + color + " - price - " + price + productType);
        String result = "";

        JSONArray obj = new JSONArray(brandNames);
        JSONArray obj1 = new JSONArray(color);
        JSONArray obj2 = new JSONArray(price);

        List<Product> brnBrand = dataServices.getProductQueryResult(obj, obj1, obj2, productType);
        System.out.println("Brand specific products are : - " + brnBrand.size());
        Gson gson = new Gson();
        result = gson.toJson(brnBrand);

        return result;
    }

    @RequestMapping(value = "compare/{key}/{productType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String compareProductPrice(@PathVariable("key") String key, @PathVariable("productType") String productType) throws Exception {

        System.out.println("compareProductPrice for - " + key);
        String result = "";
        List<Product> getOMGPrice = null;
        try {
            getOMGPrice = dataServices.compareAllProductPrice(key.replaceAll("[^a-zA-Z0-9 ]", ""), productType);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();
        result = gson.toJson(getOMGPrice);

        return result;
    }

}
