package testeBackEnd.serverBrasa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import testeBackEnd.serverBrasa.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
