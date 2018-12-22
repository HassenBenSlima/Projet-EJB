package com.dao;

import java.util.List;

import javax.ejb.Local;

import com.entities.Enseignant;

@Local
public interface EnseignantsLocal {

	Enseignant addEnseignant(Enseignant e);

	List<Enseignant> getAllEnseignants();

	void deleteEnseignant(Long id);

	void updateEnseignant(Long id);

	Enseignant getEnseignant(Long id);

	Enseignant findEnseignantByLoginAndPassword(String login, String password);

}
