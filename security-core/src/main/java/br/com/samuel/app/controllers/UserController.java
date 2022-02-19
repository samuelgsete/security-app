package br.com.samuel.app.controllers;

import javax.annotation.security.RolesAllowed;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @GetMapping("hello")
    public ResponseEntity<String> welcome() {
        return ResponseEntity.ok().body("Olá, seja bem vindo!!");
    }
    
    @RolesAllowed("user")
    @GetMapping("/user")
    public ResponseEntity<String> user() {
        return ResponseEntity.ok().body("Eu sou usuário comum");
    }

    @RolesAllowed("admin")
    @GetMapping("/admin")
    public ResponseEntity<String> admin() {
        return ResponseEntity.ok().body("Eu sou usuário admin");
    }
}