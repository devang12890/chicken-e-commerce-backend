package com.chicken.controller;

import com.chicken.model.Order;
import com.chicken.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
public class CheckoutController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/submitOrder")
    @ResponseBody
    public ResponseEntity<String> submitOrder(@RequestBody Order order) {
        order.setOrderDate(new Date());  // Set current date
        // Ideally, setTotal comes from service calculating cart items
        orderService.saveOrder(order);
        return ResponseEntity.ok("Order placed successfully");
    }

    @GetMapping("/checkout")
    public String checkoutPage() {
        return "checkout";  // Make sure checkout.html exists in templates/
    }
}
