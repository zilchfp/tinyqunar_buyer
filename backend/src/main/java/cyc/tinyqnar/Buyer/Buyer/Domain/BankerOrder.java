package cyc.tinyqnar.Buyer.Buyer.Domain;


import lombok.Data;
import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
public class BankerOrder {

    public BankerOrder() {

    }

    public BankerOrder(int transferor_id, int recipient_id, double money) {
        this.transferor_id = transferor_id;
        this.recipient_id = recipient_id;
        this.money = money;
        long time =  new Date().getTime();
        this.deal_date =  new SimpleDateFormat("yyyy-MM-dd").format(time);
        this.deal_time =  new SimpleDateFormat("HH-mm-ss").format(time);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String deal_date;

    @Column
    private String deal_time;

    @Column
    private double money;


    @Column
    private int transferor_id;

    @Column
    private int recipient_id;

}
