package tech.archdev.portfolio.domains;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

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

    @Column(name="imageUrl")
    private List<String> projectImageUrls;

    public void addImageToList(String url) {
        this.projectImageUrls.add(url);
    }

}
