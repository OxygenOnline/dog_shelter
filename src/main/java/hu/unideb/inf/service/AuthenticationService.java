package hu.unideb.inf.service;

import hu.unideb.inf.dao.request.SigninRequest;
import hu.unideb.inf.dao.request.SignupRequest;
import hu.unideb.inf.dao.response.JwtAuthenticationResponse;


public interface AuthenticationService {

    JwtAuthenticationResponse signup(SignupRequest request);
    JwtAuthenticationResponse signin(SigninRequest request);
}
