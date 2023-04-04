Feature: Logging in

  Scenario: Iniciar sesion en la pagina

    Given I on the right page
    When I fill the form with my email: "agent@phptravels.com" and my password: "demoagent"
    Then I should see the dashboard page

  @probando
  Scenario Outline: Scenario Outline for login

    Given I on the right page
    When I fill the form with my <Email> and my <Password>
    Then I should see the dashboard page

    Examples:
        | Email                 | Password  |
        | user@phptravels.com   | demouser  |
        | agent@phptravels.com  | demoagent |
        | test1@phptravels.com  | demotest1 |
        | test2@phptravels.com  | demotest2 |