package cyc.tinyqnar.Buyer.Buyer.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import cyc.tinyqnar.Buyer.Buyer.Domain.BankerOrder;
import cyc.tinyqnar.Buyer.Buyer.Domain.Ticket;
import cyc.tinyqnar.Buyer.Buyer.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;


@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;
    @Autowired
    private RestTemplate restTemplate;


    @RequestMapping(value = "/test",  produces = MediaType.APPLICATION_JSON_VALUE)
    public BankerOrder[] test() {
        ResponseEntity<BankerOrder[]> responseEntity = restTemplate.getForEntity("http://banker/order/all", BankerOrder[].class);
        BankerOrder[] res = responseEntity.getBody();
        return res;
    }

    @RequestMapping("/ticket/query")
    public List<Ticket> OrderFind() {

        return ticketService.findRestTickets();
    }

    @RequestMapping(value = "/ticket/delete", method = RequestMethod.POST)
    public int TicketDelete(@RequestParam(value = "id")int id) {
        System.out.println(id);
        return ticketService.deleteById(id);
    }


    @RequestMapping(value = "/ticket/add", method = {RequestMethod.POST, RequestMethod.GET})
    public Ticket TicketEdit(@RequestBody String ticket) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Ticket t = mapper.readValue(ticket, Ticket.class);
        return ticketService.updateTicket(t);
    }
}