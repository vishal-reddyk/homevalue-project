package com.project22.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project22.model.Property;
import com.project22.repository.PropertyRepository;

@RestController
@RequestMapping("/api/property")
@CrossOrigin("*")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    @PostMapping
    public Property addProperty(@RequestBody Property property) {

        double budget = property.getBudget();

        String suggestion;

        if (budget < 100000) {
            suggestion = "Painting and lighting improvements";
        } 
        else if (budget < 300000) {
            suggestion = "Kitchen renovation and interior design";
        } 
        else {
            suggestion = "Full house modernization";
        }

        property.setRecommendation(suggestion);

        return propertyRepository.save(property);
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }
}