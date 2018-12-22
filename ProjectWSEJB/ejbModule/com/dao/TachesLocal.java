package com.dao;

import java.util.List;

import javax.ejb.Local;

import com.entities.Tache;

@Local
public interface TachesLocal {

	Tache addTache(Tache e);

	List<Tache> getTachesByDate(String date,boolean status);

	List<Tache> getTachesByState(boolean status);

	List<Tache> getTachesByStateAndEng(boolean status,Long id);
	
	void changeStatusTache(Long id);

	void deleteTache(Long id);

	void updateTache(Long id);

	Tache getTache(Long id);

}
