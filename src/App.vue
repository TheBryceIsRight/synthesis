<template>
  <v-app>
    <v-main>
      <v-app-bar
      color="#4B466F"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>Documentation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>
      <v-container style="width:83%">
      <router-view/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      width=60%
    >
      <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="false"
        prepend-icon="mdi-book-open-page-variant "
      >
        <template v-slot:activator>
          <v-list-item-title>User Guide</v-list-item-title>
        </template>



        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Onboarding</v-list-item-title>
            </v-list-item-content>
          </template>

           <router-link to="/" style="text-decoration:none">
          <v-list-item
            v-for="([title, icon], i) in training"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list-group>

                <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Administration</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in administration"
            :key="i"
            link
          >

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        
        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Executions & Orchestrations</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in projects"
            :key="i"
            link
          >

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Architect Test Creation</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in architect"
            :key="i"
            link
          >

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>

          </v-list-item>
        </v-list-group>
         <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>NLP Test Creation</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in nlp"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Test Case Management</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in test_case_management"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Test Data Management - Data Driven Testing</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in test_data_management"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Test Executions & Orchestrations</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in executions_and_orchestrations"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group><v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Test Editing & Debugging</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in editing_and_debugging"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group><v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Functionize Tools</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in fze_tools"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group><v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Reusable workflows: components</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in components"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group><v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Integrations</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in integrations"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group><v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Reporting & Performance Metrics</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in reporting_and_performance_metrics"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>





      </v-list-group>

      <v-list-group
        :value="false"
        prepend-icon="mdi-alert-decagram "
      >
        <template v-slot:activator>
          <v-list-item-title>Release Notes</v-list-item-title>
        </template>



        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Functionize Release Notes</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in release"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>

          </v-list-item>
        </v-list-group>

                <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Architect Release Notes</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in architect_version"
            :key="i"
            link
          >

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>

          </v-list-item>
        </v-list-group>
        
        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Feature Highlights</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in feature_highlights"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        
      </v-list-group>
      
      <v-list-group
        :value="false"
        prepend-icon="mdi-help-circle-outline "
      >
        <template v-slot:activator>
          <v-list-item-title>Troubleshooting</v-list-item-title>
        </template>



        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Best Practices</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in best_practices"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>

          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Frequently Asked Questions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="([title, icon], i) in faq"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      

        
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    selected: [],
    years: [
          {
            color: 'cyan',
            year: '2018 Q2',
          },
          {
            color: 'green',
            year: '2018 Q4',
          },
          {
            color: 'pink',
            year: '2019 Q2',
          },
          {
            color: 'amber',
            year: '2019 Q4',
          },
          {
            color: 'orange',
            year: '2020 Q3',
          },
        ],
        items: [
          {
            action: '15 min',
            headline: 'Wednesday at 12:57',
            subtitle: `Resolved an issue where email notification was not received after certain orchestration executions.`,
            title: "What's New in Version 5.0.16?",
          },
          {
            action: '2 hr',
            headline: 'November 03, 2021 07:00',
            subtitle: `Resolved an issue where certain orchestration APIs were not triggering the start of an orchestration`,
            title: "What's New in Version 5.0.15?",
          },
          {
            action: '6 hr',
            headline: 'October 25, 2021 12:23',
            subtitle: 'Resolved a performance issue on certain popups throughout the application.',
            title: "What's New in Version 5.0.14?",
          },
          {
            action: '12 hr',
            headline: 'October 12, 2021 09:22',
            subtitle: 'Resolved a Slider View display issue occurring in certain tests.',
            title: "What's New in Version 5.0.13?",
          },
          {
            action: '18hr',
            headline: 'October 08, 2021 08:28',
            subtitle: 'Obfuscated passwords used in site authentication test cases in the Slider View.',
            title: "What's New in Version 5.0.12?",
          },
        ],
      documents: [],
      error: null,
      drawer: false,
      group: null,
      admins: [
        ['Orchestrations', 'mdi-chart-timeline-variant-shimmer'],
        ['Test Case Execution', 'mdi-play'],
      ],
      training: [
        ['Getting the most out of self paced onboarding & training', 'mdi-message-text', '/page/7'],
        ['Intro & Prerequisites for training', 'mdi-hammer-wrench', '/page/7'],
        ['Session 1 - Create a test & execute', 'mdi-numeric-1', '/page/7'],
        ['Session 2 - NLP Creation, debugging, & editing tests', 'mdi-numeric-2', '/page/7'],
        ['Session 3 - Page Objects & Orchestrations', 'mdi-numeric-3', '/page/7'],
        ['Session 4 - TDM, Settings, & Integrations', 'mdi-numeric-4', '/page/7'],
        ['Opening and formatting support tickets', 'mdi-ticket-confirmation', '/page/7'],
        ['Escalating support tickets', 'mdi-account-supervisor', '/page/7'],
      ],
      administration: [
        ['SSO Configurations', 'mdi-account'],
        ['Product Limitations', 'mdi-speedometer'],
        ['List of Devices supported', 'mdi-devices'],
        ['How to add a new user to functionize (admin only)', 'mdi-account-plus'],
      ],
      projects: [
        ['Proxy Settings', 'mdi-web'],
        ['Create a new project', 'mdi-plus'],
        ['Project Settings', 'mdi-cog'],
        ['Create, enable, move, or copy site environment', 'mdi-cloud'],
      ],
      architect: [
        ['Context Switch Action', 'mdi-rotate-3d-variant'],
        ['Scroll Actions', 'mdi-unfold-more-horizontal'],
        ['Hover Actions', 'mdi-cursor-default'],
        ['Wait Actions', 'mdi-timer-sand'],
        ['Resource Variables', 'mdi-application-outline'],
        ['Project Variables in Architect', 'mdi-cog'],
        ['Test Variables', 'mdi-cog'],
        ['Visual Verification Overview', 'mdi-eye'],
        ['Full Page Verification', 'mdi-eye'],
        ['Element Verifications', 'mdi-eye'],
      ],
      nlp: [
        ['Effective Test Case Writing in Natural Language Processing (NLP)', 'mdi-draw'],
        ['Create a New NLP Test Case', 'mdi-plus'],
        ['Sample NLP Test Case', 'mdi-file'],
        ['Review a Test Case', 'mdi-file-find'],
        ['Keywords Used by the NLP System', 'mdi-format-list-bulleted'],
        ['Essentials of Submitting NLP Test Cases', 'mdi-plus'],
        ['File Format for Submitting NLP Test Cases', 'mdi-file'],
        ['Random Email Generation & Validation in NLP', 'mdi-email'],
        ['Most Common Causes for Remodeling Test Cases', 'mdi-alert-circle'],
        ['Adding a Computer Vision Validation to an Existing Step in NLP', 'mdi-eye'],
        ['Cookies, Headers, and HTML5 Storage', 'mdi-cookie'],
        ['API Test Creation', 'mdi-code-tags'],
        ['Upload a File to Use in an NLP Test Case', 'mdi-file'],
      ],
      test_case_management: [
        ['Extensions', 'mdi-puzzle'],
        ['Test Case Status', 'mdi-check-circle'],
        ['Action Log Settings', 'mdi-cog'],
        ['Test Settings', 'mdi-file-cog'],
        ['Create a Folder', 'mdi-folder-plus'],
        ['Create a Tag', 'mdi-tag'],
        ['Performing Bulk Actions', 'mdi-select-all'],
        ['Copy To/Move To Actions', 'mdi-folder-move'],
        ['Add an Action to an Existing Test Case', 'mdi-plus'],
      ],
      test_data_management: [
        ['Mapping Test Data', 'mdi-map'],
        ['Data Source Creation', 'mdi-file-plus'],
        ['Orchestrations', 'mdi-chart-timeline-variant-shimmer'],
      ],
      best_practices: [
        ['Best Practices for Creating NLP Test Cases', 'mdi-thumb-up'],
        ['Best Practices for Creating Effective Test Cases', 'mdi-plus'],
        ['Best Practices for Using Architect', 'mdi-thumb-up'],
        ['Best Practices for Using Verifications', 'mdi-file-find'],
        ['Best Practices for Performance Maintenance | ML Engine', 'mdi-cog'],
      ],
      executions_and_orchestrations: [
        ['Create an orcehstration', 'mdi-plus'],
        ['View Orchestration Results', 'mdi-chart-timeline-variant-shimmer'],
        ['Execute a Test Case', 'mdi-play'],
        ['Perform a Load Test', 'mdi-chart-box'],
        ['Perform a Stress Test', 'mdi-chart-box'],
      ],
      editing_and_debugging: [
        ['Smart Screenshots Overview', 'mdi-image-filter-black-white'],
        ['Quick Select', 'mdi-cursor-default'],
        ['Quick Add Actions', 'mdi-plus'],
        ['SmartFix', 'mdi-alert-circle'],
        ['Editing a Test Case', 'mdi-pencil'],
        ['Diagnosing a Failed Test Case', 'mdi-message-alert'],
        ['How to Debug a Failing Test Case', 'mdi-bug'],
        ['Live Debug', 'mdi-bug'],
        ['Live Edit', 'mdi-pencil'],
        ['Action Log', 'mdi-cog'],
        ['Customizing Tests with Selectors', 'mdi-image-size-select-small'],
        ['Customizing Executors', 'mdi-image-size-select-small'],
        ['Attribute Editor', 'mdi-pencil'],
        ['Making Steps Optional or Suppressed in a Test Case', 'mdi-step-forward'],
        ['Decision Actions', 'mdi-source-branch'],
        ['Force Fail a Passing Test Case', 'mdi-alert-circle-check'],
        ['Delete a Step from a Test Case', 'mdi-delete'],
      ],
      fze_tools: [
        ['Functionize CLI Usage Guide', 'mdi-console'],
        ['Functionize Command Line Interface (CLI)', 'mdi-console'],
        ['Download and Install the Functionize CLI', 'mdi-download'],
        ['Functionize CLI Tunnel', 'mdi-console'],
        ['Email Reader Tool', 'mdi-email'],
        ['File Viewer Tool', 'mdi-file'],
        ['DB Explorer', 'mdi-database'],
      ],
      components: [
        ['Page Objects creation', 'mdi-plus'],
        ['Adding an Existing Page Object During Test Case Creation in Architect', 'mdi-plus'],
        ['Create a Page Object Within an Existing Test Case', 'mdi-plus'],
        ['How to Edit a Page Object', 'mdi-pencil'],
        ['NLP Page Objects Creation and Usage', 'mdi-text'],
      ],
      integrations: [
        ['Jira Defects', 'mdi-jira'],
        ['Xray', 'mdi-puzzle'],
        ['PagerDuty', 'mdi-puzzle'],
        ['TestRail', 'mdi-puzzle'],
        ['API Integration Guide', 'mdi-code-brackets'],
        ['API Keys', 'mdi-key'],
      ],
      reporting_and_performance_metrics: [
        ['PDF Action Log Report', 'mdi-file-pdf-box'],
        ['Test Health Report', 'mdi-file'],
        ['Browser Health Report', 'mdi-chart-donut'],
        ['Performance Metrics', 'mdi-chart-box-outline'],
      ],
      release: [
        ['5.0.16', 'mdi-code-tags'],
        ['5.0.15', 'mdi-code-tags'],
        ['5.0.14', 'mdi-code-tags'],
        ['5.0.13', 'mdi-code-tags'],
        ['5.0.12', 'mdi-code-tags'],
        ['5.0.11', 'mdi-code-tags'],
        ['5.0.10', 'mdi-code-tags'],
        ['5.0.9', 'mdi-code-tags'],
        ['5.0.8', 'mdi-code-tags'],
        ['5.0.7', 'mdi-code-tags'],
        ['5.0.6', 'mdi-code-tags'],
        ['5.0.5', 'mdi-code-tags'],
        ['5.0.4', 'mdi-code-tags'],
        ['5.0.3', 'mdi-code-tags'],
        ['5.0.2', 'mdi-code-tags'],
        ['5.0.1', 'mdi-code-tags'],
        ['5.0.0', 'mdi-code-tags'],
        ['4.2.9', 'mdi-code-tags'],
        ['4.2.8', 'mdi-code-tags'],
        ['4.2.7', 'mdi-code-tags'],
        ['4.2.6', 'mdi-code-tags'],
        ['4.2.5', 'mdi-code-tags'],
        ['4.2.4', 'mdi-code-tags'],
        ['4.2.3', 'mdi-code-tags'],
        ['4.2.2', 'mdi-code-tags'],
        ['4.2.1', 'mdi-code-tags'],
        ['4.2.0', 'mdi-code-tags'],
        ['4.1.0', 'mdi-code-tags'],
        ['4.0.0', 'mdi-code-tags'],
        ['3.19.0', 'mdi-code-tags'],
        ['3.19.0', 'mdi-code-tags'],
        ['3.19.0', 'mdi-code-tags'],
        ['3.19.0', 'mdi-code-tags'],
        ['3.18.0', 'mdi-code-tags'],
        ['3.17.0', 'mdi-code-tags'],
        ['3.16.0', 'mdi-code-tags'],
        ['3.15.0', 'mdi-code-tags'],
        ['3.14.0', 'mdi-code-tags'],
        ['3.13.0', 'mdi-code-tags'],
        ['3.12.0', 'mdi-code-tags'],
        ['3.11.0', 'mdi-code-tags'],
        ['3.10.0', 'mdi-code-tags'],
        ['3.9.0', 'mdi-code-tags'],
        ['3.8.0', 'mdi-code-tags'],
        ['3.7.0', 'mdi-code-tags'],
        ['3.6.0', 'mdi-code-tags'],
        ['3.5.0', 'mdi-code-tags'],
        ['3.4.0', 'mdi-code-tags'],
        ['3.3.0', 'mdi-code-tags'],
        ['3.2.0', 'mdi-code-tags'],
        ['3.1.0', 'mdi-code-tags'],
      ],
      architect_version: [
        ['2.1.99', 'mdi-code-tags'],
        ['2.1.84', 'mdi-code-tags'],
        ['2.1.76', 'mdi-code-tags'],
        ['2.1.49', 'mdi-code-tags'],
        ['2.1.34', 'mdi-code-tags'],
        ['2.1.22', 'mdi-code-tags'],
        ['2.1.0', 'mdi-code-tags'],
        ['2.0.0', 'mdi-code-tags'],
        ['1.4.73', 'mdi-code-tags'],
        ['1.4.70', 'mdi-code-tags'],
        ['1.4.59', 'mdi-code-tags'],
        ['1.4.33', 'mdi-code-tags'],
        ['1.4.18', 'mdi-code-tags'],
        ['1.4.08', 'mdi-code-tags'],
        ['1.4.07', 'mdi-code-tags'],
        ['1.4.06', 'mdi-code-tags'],
        ['1.3.29', 'mdi-code-tags'],
        ['1.3.25', 'mdi-code-tags'],
        ['1.3.08', 'mdi-code-tags'],
        ['1.3.0', 'mdi-code-tags'],
        ['1.2.76', 'mdi-code-tags'],
        ['1.2.68', 'mdi-code-tags'],
        ['1.2.40', 'mdi-code-tags'],
        ['1.2.37', 'mdi-code-tags'],
        ['1.2.1', 'mdi-code-tags'],
      ],
      feature_highlights: [
        ['Release v5.0 Feature Highlights', 'mdi-text'],
        ['Release v4.1 Feature Highlights', 'mdi-text'],
        ['Release 4.0 Feature Highlights', 'mdi-text'],
        ['Release v3.19.0 Feature Highlights', 'mdi-text'],
        ['New Navigation Highlights', 'mdi-text'],
        ['Reporting Highlights', 'mdi-text'],
        ['Keyboard Shortcuts', 'mdi-keyboard-outline'],
      ],
      faq: [
        ['What is Functionize?', 'mdi-help-circle-outline'],
        ['How Does Functionize work?', 'mdi-help-circle-outline'],
        ['What Software is Required to Use Functionize?', 'mdi-help-circle-outline'],
        ['What is Functional Testing?', 'mdi-help-circle-outline'],
        ['Who is Functionize For?', 'mdi-help-circle-outline'],
        ['What Downloads are Required to Use Functionize?', 'mdi-help-circle-outline'],
        ['What Are the Advantages of Functionize?', 'mdi-help-circle-outline'],
        ['What is the Functionize Modeling Process?', 'mdi-help-circle-outline'],
        ['Why Do Test Cases Self Heal When They Should Have Failed? ', 'mdi-help-circle-outline'],
        ['What is an API?', 'mdi-help-circle-outline'],
        ['What are API Calls?', 'mdi-help-circle-outline'],
        ['Does Functionize Offer API Integration?', 'mdi-help-circle-outline'],
        ['How are Browser Updates Handled?', 'mdi-help-circle-outline'],
        ['Do You Support the Testing of Different Screen Resolutions?', 'mdi-help-circle-outline'],
        ['What is a Group Orchestration?', 'mdi-help-circle-outline'],
        ['How Long Does it Take to Run a Test in Functionize?', 'mdi-help-circle-outline'],
        ['Can I Integrate with ...?', 'mdi-help-circle-outline'],
        ['Can We Export our Test Cases into a Selenium Script?', 'mdi-help-circle-outline'],
        ['Do You Support Native Apps?', 'mdi-help-circle-outline'],
        ['Do you Offer 24/7 Support?', 'mdi-help-circle-outline'],
        ['Do Tests Run on Physical or Emulated Devices?', 'mdi-help-circle-outline'],
        ['Does the live tracking widget need access to our source code?', 'mdi-help-circle-outline'],
        ['Does the live tracking widget store user credentials and other sensitive information?', 'mdi-help-circle-outline'],
        ['How many virtual machines do I get for the month with Functionize?', 'mdi-help-circle-outline'],
        ['There are a lot of screen shots stored by the tests as they run.  Can I turn off the storage of such information?', 'mdi-help-circle-outline'],
        ['How do you ensure that our data is secure?', 'mdi-help-circle-outline'],
        ['How do I create an optional verify action for click or input actions?', 'mdi-help-circle-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
  }),
   watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
