package eu.couste.dev.dao;

import java.util.*;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;
import java.net.UnknownHostException;
import com.mongodb.DBObject;

import eu.couste.dev.dao.*;

public class MessageDAO {
	private static Map<String, String> messages = new HashMap<>();

	static {
		messages.put("test", "Le test");

	}

	public static String get(String id) {
		// Since 2.10.0, uses MongoClient
		try {
			DBCollection message = Database.gardensharing().getCollection("message");

			BasicDBObject searchQuery = new BasicDBObject();
			searchQuery.put("id", id);

			DBCursor cursor = message.find(searchQuery);

			if (cursor.hasNext()) {
				DBObject object = cursor.next();

				return object.toString();
			} else {
				return null;
			}
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static void put(String id, String msg) {

		try {
			DBCollection message = Database.gardensharing().getCollection("message");

			BasicDBObject document = new BasicDBObject();
			document.put("id", id);
			document.put("msg", msg);
			message.insert(document);
		} catch (MongoException e) {
			e.printStackTrace();
		}

		// messages.put(id, msg);
	}
}
