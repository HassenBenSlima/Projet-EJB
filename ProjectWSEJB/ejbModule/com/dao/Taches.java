package com.dao;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.entities.Tache;

/**
 * Session Bean implementation class Taches
 */

@Stateless
@LocalBean
public class Taches implements TachesLocal {

	@PersistenceContext
	private EntityManager em;

	/**
	 * Default constructor.
	 */
	public Taches() {
	}

	@Override
	public Tache addTache(Tache t) {
		em.persist(t);
		return t;
	}

	@Override
	public List<Tache> getTachesByDate(String date,boolean status) {
		Query req = em.createQuery("select t from Tache t where t.dateRecuperation=:x and t.status=:y");
		req.setParameter("x", date);
		req.setParameter("y", status);
		return req.getResultList();
	}

	@Override
	public List<Tache> getTachesByState(boolean status) {
		Query req = em.createQuery("select t from Tache t where t.status=:x");
		req.setParameter("x", status);
		return req.getResultList();
	}

	@Override
	public void changeStatusTache(Long id) {
		Tache tache = getTache(id);
		tache.setStatus(true);
	}

	@Override
	public void deleteTache(Long id) {
		Tache t = this.getTache(id);
		em.remove(t);
	}

	@Override
	public void updateTache(Long id) {
		Tache t = getTache(id);
		em.merge(t);
	}

	@Override
	public Tache getTache(Long id) {
		Tache t = em.find(Tache.class, id);
		if (t == null)
			throw new RuntimeException("Ce tache n'existe pas");
		return t;
	}

	@Override
	public List<Tache> getTachesByStateAndEng(boolean status, Long id) {
		Query req = em.createQuery("select t from Tache t where t.status=:x and t.enseignant.id=:y");
		req.setParameter("x", status);
		req.setParameter("y", id);
		return req.getResultList();
	}

}
