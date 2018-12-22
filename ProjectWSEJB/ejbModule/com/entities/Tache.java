package com.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Entity implementation class for Entity: Tache
 *
 */
@Entity
public class Tache implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String dateRecuperation;
	private String heureRecuperation;
	private int nombreCopies;
	private String pathDoc;
	private boolean status;
	private String description;

	@ManyToOne
	private Enseignant enseignant;

	private static final long serialVersionUID = 1L;

	public Tache() {
		super();
	}

	public Tache(String dateRecuperation, String heureRecuperation, int nombreCopies, String pathDoc,
			Enseignant enseignant, String description) {
		super();
		this.dateRecuperation = dateRecuperation;
		this.heureRecuperation = heureRecuperation;
		this.nombreCopies = nombreCopies;
		this.pathDoc = pathDoc;
		this.enseignant = enseignant;
		this.status = false;
		this.description = description;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDateRecuperation() {
		return this.dateRecuperation;
	}

	public void setDateRecuperation(String dateRecuperation) {
		this.dateRecuperation = dateRecuperation;
	}

	public String getHeureRecuperation() {
		return this.heureRecuperation;
	}

	public void setHeureRecuperation(String heureRecuperation) {
		this.heureRecuperation = heureRecuperation;
	}

	public int getNombreCopies() {
		return this.nombreCopies;
	}

	public void setNombreCopies(int nombreCopies) {
		this.nombreCopies = nombreCopies;
	}

	public String getPathDoc() {
		return pathDoc;
	}

	public void setPathDoc(String pathDoc) {
		this.pathDoc = pathDoc;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Enseignant getEnseignant() {
		return enseignant;
	}

	public void setEnseignant(Enseignant enseignant) {
		this.enseignant = enseignant;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Tache [id=" + id + ", dateRecuperation=" + dateRecuperation + ", heureRecuperation=" + heureRecuperation
				+ ", nombreCopies=" + nombreCopies + ", pathDoc=" + pathDoc + ", status=" + status + ", description="
				+ description + ", enseignant=" + enseignant + "]";
	}

}
