package eu.couste.dev;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import eu.couste.dev.dao.*;

@Path("/message")
public class MessageRestService {

	@GET
	@Path("/{messageid}")
	public Response printMessage(@PathParam("messageid") String messageId) {
		String message = MessageDAO.get(messageId);

		if (message == null) {
			return Response.status(404).entity("Message not found").build();
		} else {
			return Response.status(200).entity(message).build();
		}
	}

	@POST
	@Path("/{messageid}")
	public Response printMessage(@PathParam("messageid") String messageId, String messageStr) {
		String message = MessageDAO.get(messageId);

		if (message != null) {
			return Response.status(400).entity("Id already taken").build();
		} else {
			MessageDAO.put(messageId, messageStr);
			return Response.status(200).entity("c'est ok").build();
		}
	}

}
