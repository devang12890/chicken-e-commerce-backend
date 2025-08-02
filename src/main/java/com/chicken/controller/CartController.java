package com.chicken.controller;

import com.chicken.model.Product;
import com.chicken.service.CartService;
import com.chicken.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductService productService;

    @PostMapping("/add-to-cart")
    public String addToCart(@RequestParam Long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            cartService.addToCart(product);
        }
        return "redirect:/cart";
    }

    @GetMapping("/cart")
    public String showCart(Model model) {
        model.addAttribute("cartItems", cartService.getCartItems());
        return "cart";
    }

    @PostMapping("/checkout")
    public String checkout() {
        cartService.clearCart();
        return "checkout";
    }
}