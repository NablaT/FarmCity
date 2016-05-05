package eu.couste.dev.dao;

import com.mongodb.MongoClient;
import com.mongodb.DB;

import java.io.*;
import java.net.UnknownHostException;
import com.mongodb.MongoException;
import java.util.*;

/**
 * Created by frouyer on 13/01/16.
 */
public class Database {

	private MongoClient client;
	private DB gardensharing;

	private static Database ourInstance = new Database();

	Database() {
		try {
			this.client = new MongoClient("localhost", 27017);
			this.gardensharing = client.getDB("gardensharing");
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
	}

	public static DB gardensharing() {
		return ourInstance.gardensharing;
	}
}