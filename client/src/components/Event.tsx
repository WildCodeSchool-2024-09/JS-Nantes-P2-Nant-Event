import "../styles/Event.css";
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useLoaderData } from "react-router-dom";
import type { EventI } from "../types/Events";

interface DataProps {
  results: EventI[];
}

function Event() {
  const data = useLoaderData() as DataProps;
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google");
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    const event = {
      summary: data?.results[0].nom,
      description: data?.results[0].description_evt,
      start: {
        dateTime: new Date(data.results[0].date).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: new Date(data.results[0].date).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.provider_token}`,
        },
        body: JSON.stringify(event),
      },
    ).then((data) => {
      alert("L'événement à été ajouté à votre agenda");
      return data.json();
    });
  }

  return (
    <main className="page">
      <h1 className="event-global-title">{data?.results[0].nom}</h1>
      {data.results[0].media_url ? (
        <img
          className="event-image"
          src={data.results[0].media_url}
          alt="Affiche de l'évènement"
        />
      ) : (
        <img className="event-image" src="/koala.jpg" alt="Koala" />
      )}

      <h3 className="category">{data?.results[0].themes_libelles} </h3>
      <p className="event-description">{data?.results[0].description_evt} </p>
      <hr className="separation" />
      <address className="adresse">
        <p className="event-description event-other">{data.results[0].lieu}</p>
        <p className="event-description event-other">
          {data.results[0].adresse}
        </p>
        <p className="event-description event-other">
          {data.results[0].code_postal}
        </p>
      </address>
      <p>{data.results[0].date}</p>
      <hr className="separation" />
      <section className="cta">
        <p className="event-description event-other">
          Informations supplémentaires :{" "}
        </p>
        <a
          className="event-link"
          href={data.results[0].url_site}
          target="_blank"
          rel="noreferrer"
        >
          Cliquez ici
        </a>
      </section>
      <section className="google-agenda">
        {session ? (
          <>
            <button
              type="button"
              className="google-button"
              onClick={() => createCalendarEvent()}
            >
              Ajouter à mon Agenda
            </button>

            <button
              type="button"
              className="google-button"
              onClick={() => signOut()}
            >
              Déconnecter
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="google-button"
              onClick={() => googleSignIn()}
            >
              Se connecter avec Google
            </button>
          </>
        )}
      </section>
    </main>
  );
}
export default Event;
