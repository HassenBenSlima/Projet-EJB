package tn.iit.service;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dao.TachesLocal;
import com.entities.Tache;

@Path("/impService")
@Produces(MediaType.APPLICATION_JSON)
public class ImpTaches {

	@EJB
	TachesLocal tachesLocal;

	@GET
	@Path("/getTacheByDate/{date}/{status}")
	public List<Tache> getAll(@PathParam("date") String dateStr, @PathParam("status") boolean status) throws Exception {

		// String to Date conversion in Java with dd-MM-yyyy format e.g. "14-09-2018"
//		DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
//		Date convertedDate = (Date) formatter.parse(dateStr);
		return tachesLocal.getTachesByDate(dateStr, status);

	}

	@GET
	@Path("/getTacheByStatus/{status}")
	public List<Tache> getAll(@PathParam("status") boolean status) throws Exception {
		return tachesLocal.getTachesByState(status);
	}

	@GET
	@Path("/changeStatusOfTache/{id}")
	public void getAllTaches(@PathParam("id") Long id) throws Exception {
		System.out.println("Bilel + Hassen");
		tachesLocal.changeStatusTache(id);
	}

	@GET
	@Path("/getTacheByStatusAndEng/{status}/{id}")
	public List<Tache> getAll(@PathParam("status") boolean status, @PathParam("id") Long id) throws Exception {
		return tachesLocal.getTachesByStateAndEng(status, id);
	}

}
