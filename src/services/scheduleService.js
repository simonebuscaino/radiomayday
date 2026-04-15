import { supabase } from '../supabase';

export const scheduleService = {
  /**
   * Ottiene il palinsesto per un giorno specifico (0-6)
   * @param {number} dayOfWeek - Giorno della settimana (0 = Domenica, 1 = Lunedì, ecc.)
   */
  async getScheduleByDay(dayOfWeek) {
    const { data, error } = await supabase
      .from('schedule')
      .select(`
        *,
        programs (
          *,
          program_staff (
            staff (
              full_name,
              image_url
            )
          )
        )
      `)
      .eq('day_of_week', dayOfWeek)
      .order('start_time', { ascending: true });

    if (error) {
      console.error('Error fetching schedule:', error);
      throw error;
    }

      // Trasformazione dei dati per il componente React
      return data.map(item => {
        // Estrai l'array degli speaker con nome e immagine se disponibile
        const extractedSpeakers = item.programs?.program_staff
          ?.map(ps => ({
            name: ps.staff?.full_name,
            img: ps.staff?.image_url?.replace('/public', '') // usa la stessa logica di rimpiazzo se necessario, o direttamente l'url
          }))
          .filter(speaker => Boolean(speaker.name)) || [];

        // Mantieni anche la stringa unita per retrocompatibilità e visualizzazione rapida
        const speakersString = extractedSpeakers.map(s => s.name).join(' & ') || 'Staff Radio Mayday';

        return {
          id: item.id,
          start: item.start_time ? item.start_time.substring(0, 5) : "--:--",
          end: item.end_time ? item.end_time.substring(0, 5) : "--:--",
          program: item.programs?.title || 'Programma in Onda',
          img: item.programs?.image_url?.replace('/public', '') || 'img/staff/placeholder.png',
          speakers: speakersString,
          speakersList: extractedSpeakers // array con { name, img }
        };
      });

  },
  
  /**
   * Ottiene tutti i programmi con i relativi conduttori dalla tabella "programs"
   */
  async getAllPrograms() {
    const { data, error } = await supabase
      .from('programs')
      .select(`
        *,
        program_staff (
          staff (
            full_name,
            image_url
          )
        )
      `)
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching programs:', error);
      throw error;
    }

    // Trasformazione dei dati per il componente React
    return data.map(program => {
      const extractedSpeakers = program.program_staff
        ?.map(ps => ({
          name: ps.staff?.full_name,
          img: ps.staff?.image_url?.replace('/public', '')
        }))
        .filter(speaker => Boolean(speaker.name)) || [];

      return {
        id: program.id,
        title: program.title,
        description: program.description || '',
        image: program.image_url?.replace('/public', '') || '/img/staff/placeholder.png',
        spotifyUrl: program.spotify_url || null,
        speakersList: extractedSpeakers
      };
    });
  }
};
