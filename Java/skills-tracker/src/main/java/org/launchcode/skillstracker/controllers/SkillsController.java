package org.launchcode.skillstracker.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SkillsController {
    @GetMapping
    @ResponseBody
    public String hello(){
        return "<HTML><body>" +
                "<h1>Skills Tracker</h1>" +
                "<h2>Here are a few favorite skills:</h2>" +
                "<ol><li>HTML</li><li>Java</li><li>JavaScript</li>";
    }

    @GetMapping("form")
    @ResponseBody
    public String form(){
        return "<HTML><body>" +
                "<form>" +
                "Your name: <input type='text' ><br>" +
                "Choose your favorite skills in order from favorite to least favorite below <br>" +
                "<select name='skills1'>" +
                "<option>HTML</option>" +
                "<option>Java</option>" +
                "<option>JavaScript</option></select><br>" +
                "<select name='skills2'>" +
                "<option>HTML</option>" +
                "<option>Java</option>" +
                "<option>JavaScript</option></select><br>" +
                "<select name='skills3'>" +
                "<option>HTML</option>" +
                "<option>Java</option>" +
                "<option>JavaScript</option></select>" +
                "</form>";
    }



}
