package tn.iit.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.apache.commons.io.IOUtils;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import com.dao.TachesLocal;
import com.entities.Tache;

@Path("/impService")
public class UploadFile {

	@EJB
	TachesLocal tachesLocal;

	@POST
	@Path("/saveFile")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public Response save(MultipartFormDataInput input) {

		System.out.println("------------------------omar--------------------");
		Map<String, List<InputPart>> uploadForm = input.getFormDataMap();

		// Get file data to save
		List<InputPart> inputParts = uploadForm.get("attachment");

		for (InputPart inputPart : inputParts) {
			try {

				MultivaluedMap<String, String> header = inputPart.getHeaders();
				String fileName = getFileName(header);

				// convert the uploaded file to inputstream
				InputStream inputStream = inputPart.getBody(InputStream.class, null);

				byte[] bytes = IOUtils.toByteArray(inputStream);

				String path = System.getProperty("user.home") + File.separator + "uploads";

				File customDir = new File(path);

				if (!customDir.exists()) {
					customDir.mkdir();
				}

				Calendar cal = Calendar.getInstance();
				cal.setTime(Date.from(Instant.now()));

				// Create a filename from a format string.
				// ... Apply date formatting codes.
				fileName = String.format("%1$tY-%1$tm-%1$td-%1$tk-%1$tS-%1$tp-" + fileName, cal);
				String name = fileName;
				// Display our result filename.
				System.out.println("Filename:");
				System.out.println(fileName);

				fileName = customDir.getCanonicalPath() + File.separator + fileName;
				writeFile(bytes, fileName);
				// String json = "{\"fileName\":\" "+ fileName + ""}";
				String json = "{\"fileName\":\"" + name + "\"}";

				return Response.ok(json, MediaType.APPLICATION_JSON).build();

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	private String getFileName(MultivaluedMap<String, String> header) {

		String[] contentDisposition = header.getFirst("Content-Disposition").split(";");

		for (String filename : contentDisposition) {
			if ((filename.trim().startsWith("filename"))) {

				String[] name = filename.split("=");

				String finalFileName = name[1].trim().replaceAll("\"", "");
				return finalFileName;
			}
		}
		return "unknown";
	}

	// Utility method
	private void writeFile(byte[] content, String filename) throws IOException {
		File file = new File(filename);

		System.out.println("----->" + filename);

		if (!file.exists()) {
			file.createNewFile();
		}
		FileOutputStream fop = new FileOutputStream(file);
		fop.write(content);
		fop.flush();
		fop.close();
	}

	@POST
	@Path("/saveTache")
	@Consumes(MediaType.APPLICATION_JSON)
	public void saveTache(Tache t) {

		System.out.println("---------------hassen-------------");

		System.out.println("tache: " + t);
		tachesLocal.addTache(t);

	}
	
	

}
