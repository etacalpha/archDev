package tech.archdev.portfolio.domains;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class About {

    @Id
    @GeneratedValue
    private long id;

    @Lob
    @Column(name="past")
    private String past;

    @Lob
    @Column(name="present")
    private String present;

    @Lob
    @Column(name="future")
    private String future;

}
