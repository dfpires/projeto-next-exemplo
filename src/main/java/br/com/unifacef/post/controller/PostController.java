package br.com.unifacef.post.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.unifacef.post.model.Post;
import br.com.unifacef.post.model.repositories.PostRepository;
// indica que a classe responde pelas requisições REST
@RestController
public class PostController {

	// funcionalidade do Spring -> injeção de dependência
	// cria um objeto do tipo de uma interface e executo métodos desta 
	// sem precisar instanciar
	@Autowired
	PostRepository injecao;
	
	@GetMapping("/post")
	public List<Post> get(){
		return injecao.findAll(); // select * from post
	}
	
	@PostMapping("/post")
	public Post add(@RequestBody Post post) {
		return injecao.save(post); // retorna o Post inserido
	}
	
	@DeleteMapping("/post/{id}")
	public String remove(@PathVariable Long id) {
		try {
			injecao.deleteById(id);
			return "Remoção com sucesso";
		}
		catch(Exception e) {
			return "Post não existe para remoção";
		}
	}
	
	@PutMapping("/post")
	public Post update(@RequestBody Post post) {
		return injecao.save(post); // retorna o Post inserido
	}
}
