
class User < ActiveRecord::Base
  has_many :favorites, dependent: :destroy
  has_many :artists, through: :favorites
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  before_save -> do
    # self.uid = SecureRandom.uuid
    skip_confirmation!
  end

  # before_action :configure_permitted_parameters, if: :devise_controller?

  private
  # devise_parameter_sanitizer.require(:user).permit(:confirm_success_url, :config_name, :registration)


end