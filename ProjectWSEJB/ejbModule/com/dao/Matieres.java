package com.dao;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.entities.Matiere;

/**
 * Session Bean implementation class Matieres
 */
@Stateless
@LocalBean
public class Matieres implements MatieresLocal {

	@PersistenceContext
	private EntityManager em;

	/**
	 * Default constructor.
	 */
	public Matieres() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Matiere addMatiere(Matiere e) {
		em.persist(e);
		return e;
	}

	@Override
	public List<Matiere> getAllMatieres() {
		Query req = em.createQuery("select e from Matiere e");
		return req.getResultList();
	}

	@Override
	public void deleteMatiere(Long id) {
		Matiere e = this.getMatiere(id);
		System.out.println(e+"cc");
		em.remove(e);

	}

	@Override
	public void updateMatiere(Long id) {
		Matiere e = getMatiere(id);
		em.merge(e);
	}

	@Override
	public Matiere getMatiere(Long id) {
		Matiere e = em.find(Matiere.class, id);
		if (e == null)
			throw new RuntimeException("Ce matiere n'existe pas");
		return e;
	}

	@Override
	public List<Matiere> getMatiersbyEnsiegnant(Long id) {
		Query req = em.createQuery("select m from Matiere m where m.enseignant.id = :x");
		req.setParameter("x", id);
		return req.getResultList();
	}

}
