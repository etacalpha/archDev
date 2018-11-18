package tech.archdev.portfolio.domains;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter@Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode

public class Review  {

    @Id @GeneratedValue
    private long id;

    @Column(name="author")
    private String author;

    @Column(name="date")
    private LocalDate date;

    @Lob
    @Column(name="content")
    private String content;

    @Column(name="imageURL")
    private String imageURL;
}
