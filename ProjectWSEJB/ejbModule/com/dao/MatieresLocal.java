package com.dao;

import java.util.List;

import javax.ejb.Local;

import com.entities.Matiere;

@Local
public interface MatieresLocal {

	Matiere addMatiere(Matiere e);

	List<Matiere> getAllMatieres();

	void deleteMatiere(Long id);

	void updateMatiere(Long id);

	Matiere getMatiere(Long id);

	List<Matiere> getMatiersbyEnsiegnant(Long id);

}
