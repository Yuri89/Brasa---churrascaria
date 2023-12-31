package testeBackEnd.serverBrasa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import testeBackEnd.serverBrasa.model.Cliente;
import testeBackEnd.serverBrasa.repository.ClienteRepository;

import java.util.List;

@RestController
@RequestMapping ("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> listar(){
        return clienteRepository.findAll();
    }

    @PostMapping (consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public  Cliente adicionar(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

}
