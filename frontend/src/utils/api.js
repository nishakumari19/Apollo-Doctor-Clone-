export const fetchDoctors = async (filters, page = 1, limit = 6) => {
    const params = new URLSearchParams();

    if (filters.gender && filters.gender !== 'All') params.append('gender', filters.gender);
    if (filters.experience) params.append('experience', filters.experience);
    if (filters.minFee) params.append('minFee', filters.minFee);
    if (filters.maxFee) params.append('maxFee', filters.maxFee);
    if (filters.onlineConsult) params.append('onlineConsult', filters.onlineConsult);
    if (filters.hospitalVisit) params.append('hospitalVisit', filters.hospitalVisit);
    if (filters.language) params.append('language', filters.language);


    params.append('page', page);
    params.append('limit', limit);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/list-doctor-with-filter?${params.toString()}`);
    return await res.json();
};
