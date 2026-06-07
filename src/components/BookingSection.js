import { h } from '../lib/createElement.js';

const { useEffect, useMemo, useState } = window.React;

const storageKey = 'sanjay-pandey-portfolio-bookings';
const registrationKey = 'sanjay-pandey-portfolio-registration';

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function formatDateLabel(dateString) {
  if (!dateString) return '';
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }).format(date);
}

function getMonthGrid(baseDate) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < startDay; i += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function BookingSection() {
  const [registration, setRegistration] = useState(() =>
    safeParse(window.localStorage.getItem(registrationKey), null),
  );
  const [appointments, setAppointments] = useState(() =>
    safeParse(window.localStorage.getItem(storageKey), []),
  );
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: '',
  });
  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    purpose: '',
    notes: '',
  });
  const [status, setStatus] = useState('');
  const [calendarMonth] = useState(() => new Date());

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    if (registration) {
      window.localStorage.setItem(registrationKey, JSON.stringify(registration));
    } else {
      window.localStorage.removeItem(registrationKey);
    }
  }, [registration]);

  const sortedAppointments = useMemo(
    () =>
      [...appointments].sort((a, b) =>
        `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`),
      ),
    [appointments],
  );

  const monthGrid = useMemo(() => getMonthGrid(calendarMonth), [calendarMonth]);

  const appointmentsByDate = useMemo(() => {
    return sortedAppointments.reduce((acc, item) => {
      acc[item.date] = acc[item.date] || [];
      acc[item.date].push(item);
      return acc;
    }, {});
  }, [sortedAppointments]);

  function handleRegisterSubmit(event) {
    event.preventDefault();
    setRegistration(registerForm);
    setBookingForm((current) => ({
      ...current,
      purpose: registerForm.purpose,
    }));
    setStatus('Registration completed. You can now book an appointment.');
  }

  function handleBookingSubmit(event) {
    event.preventDefault();

    if (!registration) {
      setStatus('Please complete registration first.');
      return;
    }

    const nextAppointment = {
      id: `${bookingForm.date}-${bookingForm.time}-${Date.now()}`,
      fullName: registration.fullName,
      email: registration.email,
      phone: registration.phone,
      connectionPurpose: registration.purpose,
      date: bookingForm.date,
      time: bookingForm.time,
      purpose: bookingForm.purpose || registration.purpose,
      notes: bookingForm.notes,
    };

    setAppointments((current) => [...current, nextAppointment]);
    setBookingForm({ date: '', time: '', purpose: '', notes: '' });
    setStatus('Appointment booked successfully.');
  }

  return h(
    'section',
    { className: 'section booking-section', id: 'register' },
    h(
      'div',
      { className: 'section-heading' },
      h('p', { className: 'eyebrow' }, 'Register'),
      h('h2', null, 'Register first, then book an appointment.'),
    ),
    h(
      'p',
      { className: 'section-copy booking-copy' },
      'To connect with me, fill out the registration form with your details and purpose. Once registered, you can book an appointment and I can review it in the calendar section.',
    ),
    status
      ? h('p', { className: 'form-status' }, status)
      : null,
    h(
      'div',
      { className: 'booking-grid' },
      h(
        'div',
        { className: 'booking-card' },
        h('h3', null, 'Step 1: Registration'),
        h(
          'form',
          {
            className: 'stack-form',
            onSubmit: handleRegisterSubmit,
          },
          h('label', null, 'Full Name', h('input', {
            type: 'text',
            value: registerForm.fullName,
            onChange: (e) => setRegisterForm({ ...registerForm, fullName: e.target.value }),
            placeholder: 'Enter full name',
            required: true,
          })),
          h('label', null, 'Email', h('input', {
            type: 'email',
            value: registerForm.email,
            onChange: (e) => setRegisterForm({ ...registerForm, email: e.target.value }),
            placeholder: 'Enter email address',
            required: true,
          })),
          h('label', null, 'Phone Number', h('input', {
            type: 'tel',
            value: registerForm.phone,
            onChange: (e) => setRegisterForm({ ...registerForm, phone: e.target.value }),
            placeholder: 'Enter phone number',
            required: true,
          })),
          h('label', null, 'Purpose of Connect', h('textarea', {
            value: registerForm.purpose,
            onChange: (e) => setRegisterForm({ ...registerForm, purpose: e.target.value }),
            placeholder: 'Tell me why you want to connect',
            rows: 4,
            required: true,
          })),
          h('button', { className: 'button button-primary', type: 'submit' }, registration ? 'Update Registration' : 'Register'),
        ),
      ),
      h(
        'div',
        { className: 'booking-card' },
        h('h3', null, 'Step 2: Book Appointment'),
        registration
          ? h(
              'form',
              {
                className: 'stack-form',
                onSubmit: handleBookingSubmit,
              },
              h('div', { className: 'booking-summary' }, `Registered: ${registration.fullName}`),
              h('label', null, 'Appointment Date', h('input', {
                type: 'date',
                value: bookingForm.date,
                onChange: (e) => setBookingForm({ ...bookingForm, date: e.target.value }),
                required: true,
              })),
              h('label', null, 'Appointment Time', h('input', {
                type: 'time',
                value: bookingForm.time,
                onChange: (e) => setBookingForm({ ...bookingForm, time: e.target.value }),
                required: true,
              })),
              h('label', null, 'Purpose', h('input', {
                type: 'text',
                value: bookingForm.purpose,
                onChange: (e) => setBookingForm({ ...bookingForm, purpose: e.target.value }),
                placeholder: 'Meeting purpose',
              })),
              h('label', null, 'Notes', h('textarea', {
                value: bookingForm.notes,
                onChange: (e) => setBookingForm({ ...bookingForm, notes: e.target.value }),
                placeholder: 'Any extra details',
                rows: 4,
              })),
              h('button', { className: 'button button-primary', type: 'submit' }, 'Book Appointment'),
            )
          : h('p', { className: 'booking-lock' }, 'Please register first to unlock appointment booking.'),
      ),
    ),
    h(
      'div',
      { className: 'calendar-shell', id: 'calendar' },
      h(
        'div',
        { className: 'section-heading' },
        h('p', { className: 'eyebrow' }, 'Calendar'),
        h('h2', null, 'Appointment calendar'),
      ),
      h(
        'div',
        { className: 'calendar-layout' },
        h(
          'div',
          { className: 'calendar-card' },
          h('div', { className: 'calendar-header' }, new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(calendarMonth)),
          h(
            'div',
            { className: 'calendar-weekdays' },
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
          ),
          h(
            'div',
            { className: 'calendar-grid' },
            ...monthGrid.map((date, index) => {
              if (!date) {
                return h('div', { className: 'calendar-cell empty', key: `empty-${index}` });
              }
              const key = date.toISOString().slice(0, 10);
              const count = appointmentsByDate[key]?.length || 0;
              return h(
                'div',
                { className: `calendar-cell${count ? ' has-appointment' : ''}`, key },
                h('span', { className: 'calendar-day' }, String(date.getDate())),
                count
                  ? h('span', { className: 'calendar-count' }, `${count} appt${count > 1 ? 's' : ''}`)
                  : null,
              );
            }),
          ),
        ),
        h(
          'div',
          { className: 'calendar-list' },
          h('h3', null, 'Upcoming appointments'),
          sortedAppointments.length
            ? sortedAppointments.map((item) =>
                h(
                  'article',
                  { className: 'appointment-item', key: item.id },
                  h(
                    'div',
                    { className: 'appointment-title' },
                    h('strong', null, item.fullName),
                    h('span', null, `${formatDateLabel(item.date)} at ${item.time}`),
                  ),
                  h('p', null, item.purpose || item.connectionPurpose),
                  h('small', null, item.email),
                ),
              )
            : h('p', { className: 'booking-lock' }, 'No appointments booked yet.'),
        ),
      ),
    ),
  );
}
