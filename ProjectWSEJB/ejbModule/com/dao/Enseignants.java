package com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.entities.Enseignant;

/**
 * Session Bean implementation class Enseignants
 */
@Stateless
@LocalBean
public class Enseignants implements EnseignantsLocal {

	@PersistenceContext
	private EntityManager em;

	/**
	 * Default constructor.
	 */
	public Enseignants() {
	}

	@Override
	public Enseignant addEnseignant(Enseignant e) {
		em.persist(e);
		return e;
	}

	@Override
	public List<Enseignant> getAllEnseignants() {
		Query req = em.createQuery("select e from Enseignant e");
		return req.getResultList();
	}

	@Override
	public void deleteEnseignant(Long id) {
		Enseignant e = this.getEnseignant(id);
		em.remove(e);
	}

	@Override
	public void updateEnseignant(Long id) {
		Enseignant e = getEnseignant(id);
		em.merge(e);

	}

	@Override
	public Enseignant getEnseignant(Long id) {
		Enseignant e = em.find(Enseignant.class, id);
		if (e == null)
			throw new RuntimeException("Ce enseignant n'existe pas");
		return e;
	}

	@Override
	public Enseignant findEnseignantByLoginAndPassword(String login, String password) {
		List<Enseignant> engs = new ArrayList<>();
		Query req = em.createQuery("select e from Enseignant e where e.login = :x and e.password = :y");
		req.setParameter("x", login);
		req.setParameter("y", password);
		engs = req.getResultList();
		if (engs.isEmpty()) {
			return null;
		}

		return engs.get(0);

	}

}
