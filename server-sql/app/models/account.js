module.exports = function(account, Seq, DbService) {

  /* Regular fields. */
  account
    .field('id', Seq.PRIMARY)
    .field('first_name', Seq.STRING)
    .field('last_name', Seq.STRING)
    .field('email', Seq.STRING(500), {
      allowNull: true,
      defaultValue: null
    })
    .field('is_active', Seq.BOOLEAN, {
      defaultValue: true
    });

  account
    .getter('name', function GetSettings() {
      return this.get('first_name') + ' ' + this.get('last_name');
    });

  /* Custom account errors */
  account
    .error('DISABLED', 'This account has been disabled.');
};