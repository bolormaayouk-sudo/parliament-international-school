const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route  GET /api/dashboard/student
router.get('/student', protect, authorize('student'), async (req, res) => {
  const data = {
    stats: [
      { label: 'GPA', value: '3.87', icon: 'grade', color: 'blue', trend: '+0.12 this semester' },
      { label: 'Attendance', value: '96%', icon: 'event_available', color: 'green', trend: '2 absences this term' },
      { label: 'Assignments', value: '4 Due', icon: 'assignment', color: 'amber', trend: 'Next: Monday' },
      { label: 'Rank', value: '#12', icon: 'leaderboard', color: 'purple', trend: 'Out of 120 students' }
    ],
    upcomingAssignments: [
      { subject: 'Advanced Mathematics', title: 'Calculus Problem Set 7', due: 'Mon, Dec 16', status: 'pending', priority: 'high' },
      { subject: 'Literature & Composition', title: 'Essay: The Great Gatsby Analysis', due: 'Wed, Dec 18', status: 'in-progress', priority: 'medium' },
      { subject: 'Physics', title: 'Lab Report: Newton\'s Laws', due: 'Fri, Dec 20', status: 'pending', priority: 'medium' },
      { subject: 'History', title: 'Research Paper: Cold War', due: 'Mon, Dec 23', status: 'not-started', priority: 'low' }
    ],
    recentGrades: [
      { subject: 'Chemistry', assessment: 'Mid-Term Exam', score: 94, grade: 'A', date: 'Dec 10' },
      { subject: 'Mathematics', assessment: 'Problem Set 6', score: 88, grade: 'B+', date: 'Dec 8' },
      { subject: 'Literature', assessment: 'Reading Quiz', score: 96, grade: 'A', date: 'Dec 6' },
      { subject: 'Physics', assessment: 'Chapter 5 Test', score: 91, grade: 'A-', date: 'Dec 4' }
    ],
    todaySchedule: [
      { time: '08:00', subject: 'Advanced Mathematics', room: 'Room 204', teacher: 'Mr. Chen' },
      { time: '09:45', subject: 'Literature', room: 'Room 110', teacher: 'Ms. Patel' },
      { time: '11:30', subject: 'Physics Lab', room: 'Lab 3', teacher: 'Dr. Harrington' },
      { time: '13:30', subject: 'History', room: 'Room 305', teacher: 'Mr. Williams' },
      { time: '15:00', subject: 'Debate Club', room: 'Hall B', teacher: 'Ms. Roberts' }
    ],
    announcements: [
      { title: 'Winter Exam Schedule Released', date: 'Dec 12', type: 'academic' },
      { title: 'Science Fair Registration Closes Dec 20', date: 'Dec 11', type: 'event' },
      { title: 'Library Hours Extended During Exams', date: 'Dec 10', type: 'info' }
    ]
  };
  res.json({ success: true, data });
});

// @route  GET /api/dashboard/parent
router.get('/parent', protect, authorize('parent'), async (req, res) => {
  const data = {
    children: [
      {
        name: 'Ethan Thompson',
        grade: 'Grade 9',
        studentId: 'STD-2024-045',
        gpa: '3.72',
        attendance: '94%',
        avatar: 'ET',
        color: 'blue'
      },
      {
        name: 'Lily Thompson',
        grade: 'Grade 6',
        studentId: 'STD-2024-103',
        gpa: '3.91',
        attendance: '98%',
        avatar: 'LT',
        color: 'pink'
      }
    ],
    feeStatus: {
      balance: '₦250,000',
      nextDue: 'Jan 15, 2025',
      status: 'Partial',
      termFee: '₦450,000',
      paid: '₦200,000'
    },
    upcomingEvents: [
      { title: 'Parent-Teacher Conference', date: 'Dec 18, 2024', time: '10:00 AM', type: 'meeting' },
      { title: 'End of Term Ceremony', date: 'Dec 20, 2024', time: '9:00 AM', type: 'event' },
      { title: 'Winter Break Begins', date: 'Dec 21, 2024', time: 'All Day', type: 'holiday' },
      { title: 'New Term Resumption', date: 'Jan 13, 2025', time: '8:00 AM', type: 'academic' }
    ],
    recentMessages: [
      { from: 'Dr. Harrington (Physics)', message: 'Ethan showed great improvement in the lab this week.', date: 'Dec 12', read: false },
      { from: 'Class Teacher - Grade 6', message: 'Lily was selected for the spelling bee competition!', date: 'Dec 11', read: false },
      { from: 'Accounts Department', message: 'Your fee payment has been received. Balance: ₦250,000', date: 'Dec 10', read: true }
    ],
    gradeOverview: {
      ethan: [
        { subject: 'Math', score: 82 }, { subject: 'Science', score: 78 },
        { subject: 'English', score: 88 }, { subject: 'History', score: 75 }, { subject: 'Art', score: 92 }
      ],
      lily: [
        { subject: 'Math', score: 95 }, { subject: 'Science', score: 91 },
        { subject: 'English', score: 97 }, { subject: 'History', score: 88 }, { subject: 'Art', score: 96 }
      ]
    }
  };
  res.json({ success: true, data });
});

// @route  GET /api/dashboard/staff
router.get('/staff', protect, authorize('staff'), async (req, res) => {
  const data = {
    stats: [
      { label: 'My Classes', value: '6', icon: 'class', color: 'blue', sub: 'Active this term' },
      { label: 'Total Students', value: '184', icon: 'groups', color: 'green', sub: 'Across all classes' },
      { label: 'Pending Grading', value: '23', icon: 'pending_actions', color: 'amber', sub: 'Submissions waiting' },
      { label: 'Avg Class Score', value: '81%', icon: 'bar_chart', color: 'purple', sub: 'This semester' }
    ],
    myClasses: [
      { name: 'Advanced Physics', grade: 'Grade 11A', students: 32, nextClass: 'Today 11:30', room: 'Lab 3', avgScore: 84 },
      { name: 'Advanced Physics', grade: 'Grade 11B', students: 30, nextClass: 'Tomorrow 9:00', room: 'Lab 3', avgScore: 79 },
      { name: 'General Physics', grade: 'Grade 10A', students: 35, nextClass: 'Today 14:00', room: 'Room 201', avgScore: 76 },
      { name: 'General Physics', grade: 'Grade 10B', students: 33, nextClass: 'Wed 10:00', room: 'Room 201', avgScore: 82 },
      { name: 'Physics Elective', grade: 'Grade 12', students: 28, nextClass: 'Thu 13:00', room: 'Lab 3', avgScore: 89 },
      { name: 'Basic Physics', grade: 'Grade 9A', students: 36, nextClass: 'Fri 8:00', room: 'Room 105', avgScore: 72 }
    ],
    pendingTasks: [
      { task: 'Grade Mid-Term Papers', class: 'Grade 11A Physics', count: 32, deadline: 'Dec 15', priority: 'urgent' },
      { task: 'Submit Report Cards', class: 'All Classes', count: 184, deadline: 'Dec 18', priority: 'high' },
      { task: 'Update Attendance Records', class: 'Grade 10B', count: 5, deadline: 'Dec 13', priority: 'medium' },
      { task: 'Prepare Final Exam Paper', class: 'Grade 12', count: 1, deadline: 'Dec 16', priority: 'high' }
    ],
    announcements: [
      { title: 'Staff Meeting: Dec 15 @ 2PM in Conference Hall', date: 'Dec 12', type: 'meeting' },
      { title: 'Exam Paper Submission Deadline Extended to Dec 17', date: 'Dec 11', type: 'info' },
      { title: 'Professional Development Workshop: Jan 8', date: 'Dec 10', type: 'event' }
    ],
    recentActivity: [
      { action: 'Graded Assignment', detail: 'Problem Set 6 — Grade 11A', time: '2 hours ago' },
      { action: 'Marked Attendance', detail: 'Grade 10A — 35 students', time: '4 hours ago' },
      { action: 'Posted Announcement', detail: 'Exam schedule for Grade 12', time: 'Yesterday' }
    ]
  };
  res.json({ success: true, data });
});

module.exports = router;
