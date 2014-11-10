package com.beingjavaguys.controller;

import com.beingjavaguys.model.PUser;
import com.beingjavaguys.services.DataServices;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 10/1/14
 * Time: 11:47 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(WatchController.class);

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    String addUser(@RequestBody PUser puser, BindingResult result) throws Exception {
        System.out.println("data from UserCtrl - " + puser.getName());
        dataServices.addUser(puser);
        return "redirect:/";

    }

    @RequestMapping(value = "/query/{username}/{password}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    String getUser(@PathVariable("username") String email, @PathVariable("password") String password) throws Exception {
        String status = "";
        System.out.println("data from UserCtrl - " + email);
        PUser pUser = dataServices.checkUser(email, password);

        List<PUser> pUsers = new ArrayList<>();
        pUsers.add(pUser);

        if (pUser != null) {
            Gson gson = new Gson();
            status =  gson.toJson(pUsers);
        } else {
            status = "REJECT";
        }

        return status;
    }
}
