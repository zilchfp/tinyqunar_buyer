package cyc.tinyqnar.Buyer.Buyer.Repository;

import cyc.tinyqnar.Buyer.Buyer.Domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface TicketRepository extends JpaRepository<Ticket, Long> {


    List<Ticket> findAllByStartAndEnd(String start, String end);

    Ticket findById(int id);

    List<Ticket> findAllByAmountGreaterThan(int lowerBound);


    @Transactional
    int deleteById(int id);



}