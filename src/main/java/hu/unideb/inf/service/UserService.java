package hu.unideb.inf.service;

import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService {

    UserDetailsService userDetailsService();
}
