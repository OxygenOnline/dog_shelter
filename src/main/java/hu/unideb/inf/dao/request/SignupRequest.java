package hu.unideb.inf.dao.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    private String email;
    private String password;
    private String firstName;
    private String lastName;
}
