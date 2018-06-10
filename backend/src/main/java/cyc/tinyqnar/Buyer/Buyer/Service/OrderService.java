package cyc.tinyqnar.Buyer.Buyer.Service;

import cyc.tinyqnar.Buyer.Buyer.Domain.BankerOrder;
import cyc.tinyqnar.Buyer.Buyer.Domain.Order;
import cyc.tinyqnar.Buyer.Buyer.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order findByID(int id) {
        Order order = orderRepository.findByID(String.valueOf(id));
        return order;
    }


}
