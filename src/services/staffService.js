import { supabase } from '../supabase';

const STAFF_TABLE = 'staff';

export const staffService = {
  // Ottiene tutto lo staff
  async getAllStaff() {
    const { data, error } = await supabase
      .from(STAFF_TABLE)
      .select('*, categories(name, description)')
      .order('full_name', { ascending: true });

    if (error) {
      console.error('Error fetching staff:', error);
      throw error;
    }
    return data;
  },

  // Ottiene lo staff filtrato per categoria
  async getStaffByCategory(category) {
    const { data, error } = await supabase
      .from(STAFF_TABLE)
      .select('*, categories(name, description)')
      .eq('category', category)
      .order('full_name', { ascending: true });

    if (error) {
      console.error(`Error fetching staff for category ${category}:`, error);
      throw error;
    }
    return data;
  }
};
