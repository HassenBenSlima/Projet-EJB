package tn.iit.service;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dao.EnseignantsLocal;
import com.entities.Enseignant;

@Path("/impService")
@Produces(MediaType.APPLICATION_JSON)
public class ImpEnseigants {

	@EJB
	EnseignantsLocal enseignantsLocal;

	@GET
	@Path("/getEnseigant/{login}/{password}")
	public Enseignant getAll(@PathParam("login") String login, @PathParam("password") String password) {
		System.out.println(" - " + login + "|+|" + password + " - ");
		return enseignantsLocal.findEnseignantByLoginAndPassword(login, password);
	}

	@GET
	@Path("/getEnseigants")
	public List<Enseignant> getAllEng() {
		return enseignantsLocal.getAllEnseignants();
	}
	
	
	
	
	
	@GET
	@Path("/getEnseigantById/{id}")
	public Enseignant getEngseignantById(@PathParam ("id")Long id) {
		return enseignantsLocal.getEnseignant(id);
	}

	@POST
	@Path("/saveEnseigant")
	public void save(Enseignant e) {
		enseignantsLocal.addEnseignant(e);
	}

}
