package tn.iit.service;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dao.MatieresLocal;
import com.entities.Matiere;

@Path("/impService")
@Produces(MediaType.APPLICATION_JSON)
public class ImpMatieres {

	@EJB
	MatieresLocal matieresLocal;

	@GET
	@Path("/getMatier/{id}")
	public List<Matiere> getAllMatier(@PathParam("id") Long id) {
		System.out.println("hassen");

		return matieresLocal.getMatiersbyEnsiegnant(id);

	}

	@POST
	@Path("/saveMatier")
	public void save(Matiere m) {
		matieresLocal.addMatiere(m);
	}

	@PUT
	@Path("/updateMatier")
	public void update(Matiere m) {
		matieresLocal.addMatiere(m);
	}

	@DELETE
	@Path("/deleteMatier/{id}")
	public void delete(@PathParam("id") Long id) {
		matieresLocal.deleteMatiere(id);
	}

}
