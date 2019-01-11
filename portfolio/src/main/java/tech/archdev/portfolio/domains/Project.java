package tech.archdev.portfolio.domains;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Project {

    @Id
    @GeneratedValue
    private long id;

    @Column(name="name")
    private String name;

    @Column(name = "created")
    private LocalDate created;

    @Lob
    @Column(name="desrciption")
    private String description;

    @Column(name="imageURL")
    private String imageURL;
}
