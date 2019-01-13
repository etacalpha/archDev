package tech.archdev.portfolio.domains;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter
@NoArgsConstructor
public class Email implements Serializable{
    private String firstName;
    private String lastName;
    private String company;
    private String email;
    private String text;
}
