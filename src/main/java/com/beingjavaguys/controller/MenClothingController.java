package com.beingjavaguys.controller;

import com.beingjavaguys.model.Brand;
import com.beingjavaguys.model.PMenClothing;
import com.beingjavaguys.services.DataServices;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 10/7/14
 * Time: 9:54 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/Men")
public class MenClothingController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(MenClothingController.class);

    @RequestMapping(value = "/brands/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenBrands(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllMenBrandList(category);
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

    @RequestMapping(value = "/color/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenColor(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllMenColorList(category);
            List<Brand> brnBrand = new ArrayList<Brand>();
            for (String brand1 : finalBrandlist) {
                Brand brand11 = new Brand();
                brand11.setColor(brand1);
                brnBrand.add(brand11);

            }
            Gson gson = new Gson();
            result = gson.toJson(brnBrand);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    @RequestMapping(value = "/allresults/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenClothsForCat(@PathVariable("category") String category) {

        String result = "";
        try {
            List<PMenClothing> finalBrandlist = dataServices.getMenClothingForCatList(category);

            /*if (category.equalsIgnoreCase("Dress")) {
                for (Iterator<PMenClothing> iter = finalBrandlist.iterator(); iter.hasNext(); ) {
                    PMenClothing p = iter.next();
                    if (p.getProductName().toLowerCase().contains("playsuit") || p.getProductName().toLowerCase().contains("nightdress")
                            || p.getProductName().toLowerCase().contains("jumpsuit") || p.getProductName().toLowerCase().contains("material")) {
                        iter.remove();
                    }
                }
            }*/

            System.out.println("Size is for finalBrandlist :: " + finalBrandlist.size());

            Gson gson = new Gson();
            result = gson.toJson(finalBrandlist);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
