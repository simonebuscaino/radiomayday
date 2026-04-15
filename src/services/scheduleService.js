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
              full_name
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
    return data.map(item => ({
      id: item.id,
      start: item.start_time ? item.start_time.substring(0, 5) : "--:--",
      end: item.end_time ? item.end_time.substring(0, 5) : "--:--",
      program: item.programs?.title || 'Programma in Onda',
      img: item.programs?.image_url?.replace('/public', '') || 'img/staff/placeholder.png',
      speakers: item.programs?.program_staff
        ?.map(ps => ps.staff?.full_name)
        .filter(Boolean)
        .join(' & ') || 'Tropp Fun Staff'
    }));
  }
};
