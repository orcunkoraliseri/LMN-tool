def calculate_ev_scenarios(
    n_households: int, 
    e_balance_base: float, 
    n_ev_per_household: float = 1.5, 
    e_ev_per_day: float = 15.0, 
    eta_charging: float = 0.90, 
    eta_battery: float = 0.90,
    p_v2g: float = 0.50,
    e_v2g_per_day: float = 10.0
) -> dict:
    """
    Calculates the energy demand and net balance for both EV1 and EV2 scenarios.
    
    Args:
        n_households: Number of households in the archetype.
        e_balance_base: Original net energy balance of the archetype (kWh/day).
        n_ev_per_household: Number of EVs per household.
        e_ev_per_day: Daily energy demand per EV (kWh).
        eta_charging: Charging efficiency (0 to 1).
        eta_battery: Battery storage efficiency (0 to 1).
        p_v2g: Percentage of EV fleet participating in V2G (0 to 1).
        e_v2g_per_day: Energy discharged per participating vehicle per day (kWh).
        
    Returns:
        A dictionary containing the calculated metrics for both scenarios.
    """
    # Shared Base Calculations
    # Eq 12: Total EV Energy Demand
    e_ev_total = n_households * n_ev_per_household * (e_ev_per_day / eta_charging)
    
    # Eq 13: Storage Loss (Assumes 50% passes through stationary storage)
    e_storage_loss = (e_ev_total * 0.5) * (1 - eta_battery)
    
    # --- EV1 (Charging-Only) Calculations ---
    # Eq 14: Total EV1 Load
    e_total_ev1 = e_ev_total + e_storage_loss
    # Eq 15: New Energy Balance (EV1)
    e_balance_ev1 = e_balance_base - e_total_ev1
    
    # --- EV2 (V2G-Enabled) Calculations ---
    # Eq 16: V2G Discharge
    e_v2g_discharge = n_households * n_ev_per_household * p_v2g * e_v2g_per_day
    # Eq 17: Total EV2 Load (EV1 Load - V2G Discharge)
    e_total_ev2 = e_total_ev1 - e_v2g_discharge
    # Eq 18: New Energy Balance (EV2)
    e_balance_ev2 = e_balance_base - e_total_ev2

    return {
        "Shared": {
            "E_EV_total_kWh": round(e_ev_total, 2),
            "E_storage_loss_kWh": round(e_storage_loss, 2),
        },
        "EV1": {
            "E_total_EV1_kWh": round(e_total_ev1, 2),
            "E_balance_EV1_kWh": round(e_balance_ev1, 2)
        },
        "EV2": {
            "E_V2G_discharge_kWh": round(e_v2g_discharge, 2),
            "E_total_EV2_kWh": round(e_total_ev2, 2),
            "E_balance_EV2_kWh": round(e_balance_ev2, 2)
        }
    }

# Verify: Example using 24 detached houses with a baseline balance of 0 kWh
if __name__ == "__main__":
    results = calculate_ev_scenarios(n_households=640, e_balance_base=0.0)
    
    import pprint
    pprint.pprint(results)