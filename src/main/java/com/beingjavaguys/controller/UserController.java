package com.beingjavaguys.controller;

import com.beingjavaguys.model.PUser;
import com.beingjavaguys.services.DataServices;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value="/query/{username}/{password}", method = RequestMethod.POST)
    public
    @ResponseBody
    String getUser(@PathVariable("username") String email, @PathVariable("password") String password, BindingResult result) throws Exception {
        System.out.println("data from UserCtrl - " +email);
       // dataServices.addUser(puser);
        return "redirect:/";

    }
}
