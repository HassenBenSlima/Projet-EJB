package com.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Entity implementation class for Entity: RequestImpresssion
 *
 */
@Entity
public class Matiere implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String labelle;
	@ManyToOne
	private Enseignant enseignant;

	private static final long serialVersionUID = 1L;

	
	
	public Matiere(String labelle, Enseignant enseignant) {
		super();
		this.labelle = labelle;
		this.enseignant = enseignant;
	}

	public Matiere() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLabelle() {
		return labelle;
	}

	public void setLabelle(String labelle) {
		this.labelle = labelle;
	}

	public Enseignant getEnseignant() {
		return enseignant;
	}

	public void setEnseignant(Enseignant enseignant) {
		this.enseignant = enseignant;
	}

	@Override
	public String toString() {
		return "Matiere [id=" + id + ", labelle=" + labelle + "]";
	}

}
