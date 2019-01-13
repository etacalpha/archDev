package tech.archdev.portfolio.domains;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Project implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    @Column(name="name")
    private String name;

    @Lob
    @Column(name="description")
    private String description;

    @Column(name="imageLocation")
    private String imageLocation;
}
