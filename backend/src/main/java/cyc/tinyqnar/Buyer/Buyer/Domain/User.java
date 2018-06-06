package cyc.tinyqnar.Buyer.Buyer.Domain;


import lombok.Data;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name="tbl_user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tlb_username")
    private String username;

    @Column(name = "userpassword")
    private String password;


}
